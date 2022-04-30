import Button from "../components/Button";
import {BUTTON_ICON, BUTTON_ICON_POS, BUTTON_SIZE, BUTTON_TYPE} from "../components/Button/Button";

export default {
    title: 'Atoms/Button',
    parameters: {
        backgrounds: {
            default: 'white',
            values: [{ name: 'white', value: 'white' }],
        },
    },
    decorators: [],
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: [
                    BUTTON_TYPE.PRIMARY,
                    BUTTON_TYPE.SECONDARY,
                    BUTTON_TYPE.TERTIARY,
                    BUTTON_TYPE.DELETE,
                ],
            },
        },
        size: {
            control: {
                type: 'select',
                options: [BUTTON_SIZE.LARGE, BUTTON_SIZE.MEDIUM, BUTTON_SIZE.SMALL, BUTTON_SIZE.X_SMALL],
            },
        },
        icon: {
            control: {
                type: 'select',
                options: [
                    BUTTON_ICON.CANCEL,
                    BUTTON_ICON.DELETE,
                    BUTTON_ICON.DOWNLOAD,
                    BUTTON_ICON.EDIT,
                    BUTTON_ICON.PHONE,
                    BUTTON_ICON.SAVE,
                    BUTTON_ICON.VIEW,
                ],
            },
        },
        iconPos: {
            control: {
                type: 'select',
                options: [BUTTON_ICON_POS.LEFT, BUTTON_ICON_POS.RIGHT],
            },
        },
        htmlType: {
            control: {
                type: 'select',
                options: [undefined, 'submit', 'reset', 'button'],
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: BUTTON_TYPE.PRIMARY,
    size: BUTTON_SIZE.LARGE,
    text: 'Button',
    disabled: false,
    onClick: () => console.log('on click button!'),
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    ...Primary.args,
    disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    type: BUTTON_TYPE.SECONDARY,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    ...Secondary.args,
    disabled: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    ...Primary.args,
    type: BUTTON_TYPE.TERTIARY,
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
    ...Tertiary.args,
    disabled: true,
};

export const Delete = Template.bind({});
Delete.args = {
    ...Primary.args,
    type: BUTTON_TYPE.DELETE,
};

export const DeleteDisabled = Template.bind({});
DeleteDisabled.args = {
    ...Delete.args,
    disabled: true,
};