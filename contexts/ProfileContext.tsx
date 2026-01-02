"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type ChildProfile = {
    name: string;
    age: '2-3' | '4-5' | '6-8';
    speechLevel: 'non-verbal' | 'single-words' | 'sentences';
    sensoryProfile: 'seeker' | 'avoider' | 'mixed';
    hasCompletedAssessment: boolean;
    completedExercises: string[]; // IDs of completed exercises
};

interface ProfileContextType {
    profile: ChildProfile;
    setProfile: (p: ChildProfile) => void;
    updateProfile: (partial: Partial<ChildProfile>) => void;
    toggleExerciseCompletion: (id: string) => void;
    isExerciseCompleted: (id: string) => boolean;
}

const defaultProfile: ChildProfile = {
    name: "My Child",
    age: "2-3",
    speechLevel: "single-words",
    sensoryProfile: "mixed",
    hasCompletedAssessment: false,
    completedExercises: []
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
    const [profile, setProfileState] = useState<ChildProfile>(defaultProfile);

    // Load from localStorage on mount (client-side only)
    useEffect(() => {
        const saved = localStorage.getItem("child_profile");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Merge with default to ensure new fields (like completedExercises) exist if loading old data
                setProfileState({ ...defaultProfile, ...parsed });
            } catch (e) {
                console.error("Failed to parse profile", e);
            }
        }
    }, []);

    const saveProfile = (p: ChildProfile) => {
        setProfileState(p);
        localStorage.setItem("child_profile", JSON.stringify(p));
    };

    const setProfile = (p: ChildProfile) => {
        saveProfile(p);
    };

    const updateProfile = (partial: Partial<ChildProfile>) => {
        setProfileState(prev => {
            const newState = { ...prev, ...partial };
            localStorage.setItem("child_profile", JSON.stringify(newState));
            return newState;
        });
    };

    const toggleExerciseCompletion = (id: string) => {
        setProfileState(prev => {
            const isDone = prev.completedExercises.includes(id);
            const newCompleted = isDone
                ? prev.completedExercises.filter(exId => exId !== id) // Remove
                : [...prev.completedExercises, id]; // Add

            const newState = { ...prev, completedExercises: newCompleted };
            localStorage.setItem("child_profile", JSON.stringify(newState));
            return newState;
        });
    };

    const isExerciseCompleted = (id: string) => {
        return profile.completedExercises.includes(id);
    };

    return (
        <ProfileContext.Provider value={{ profile, setProfile, updateProfile, toggleExerciseCompletion, isExerciseCompleted }}>
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfile() {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
}
