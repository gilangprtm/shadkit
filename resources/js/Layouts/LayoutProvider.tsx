import React, { createContext, useContext, useState } from "react";

interface LayoutProps {
    children: React.ReactNode;
    header?: React.ReactNode;
}

interface LayoutContextType {
    setLayout: (
        layout: React.ComponentType<LayoutProps>,
        props?: Omit<LayoutProps, "children">
    ) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [layout, setLayoutState] = useState<{
        component: React.ComponentType<LayoutProps>;
        props?: Omit<LayoutProps, "children">;
    } | null>(null);

    const setLayout = (
        component: React.ComponentType<LayoutProps>,
        props?: Omit<LayoutProps, "children">
    ) => {
        setLayoutState({ component, props });
    };

    return (
        <LayoutContext.Provider value={{ setLayout }}>
            {layout
                ? React.createElement(layout.component, {
                      ...layout.props,
                      children, // `children` disisipkan ke dalam layout
                  })
                : children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within a LayoutProvider");
    }
    return context;
};
