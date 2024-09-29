import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/Label";

const meta = {
    title : "UI/MyLabel",
    component : Label,
    tags: ["UI", "Label", "autodocs"],
    argTypes: {
        label : {
            description : "The text to display in the label"
        },
        size : {
            description : "The size of the label",
            control : {
                type : "select",
                options : ["normal", "h1", "h2", "h3"]
                
            }
        },
        fontColor : {
            description : "A custom color for the label",
        },
        color : {
            description : "The color of the label",
            control : {
                type : "select",
                options : ["text-primary", "text-secondary", "text-tertiary"]
            }
        },
        allCaps : {
            description : "to capitalize the label",
            control : {
                type : "boolean"
                
            }
        }
    },
    parameters: {
        layout : "centered"
    }
} satisfies Meta<typeof Label>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Basic : Story = {
    args : {
        label : "Hello",
        size : "h1"
    }   
};

export const AllCaps : Story = {
    args : {
        label : "all caps",
        size : "h1",
        allCaps : true
    }   
};

export const Secondary : Story = {
    args : {
        label : "Secondary label",
        size : "h1",
        color : "text-secondary"
    }   
};

export const CustomColor : Story = {
    args : {
        label : "Custom color",
        size : "h1",
        fontColor : "red"
    }   
};
