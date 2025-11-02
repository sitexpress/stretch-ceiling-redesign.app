"use client";
import CallBackForm from "@/components/Forms/CallBackForm/CallBackForm";
import { Badge, CloseButton, Modal } from "@mantine/core";
import { Text } from "@mantine/core";
import { Banner } from "../Banner/Banner";
import { IconBrandTelegram } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import classes from "./Modal.module.css";

type ModalType = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    modalMode: "callBack" | "measurer" | "calculations" | "telegramBanner" | "want" | "";
    project?: string;
};

const heading = (modalMode: string) => {
    return modalMode === "callBack" ? (
        <Text fw={700} size="lg" ml="md">
            Обратный звонок
        </Text>
    ) : modalMode === "measurer" ? (
        <Text fw={700} size="lg" ml="md">
            Запись на замер
        </Text>
    ) : modalMode === "want" ? (
        <span
            style={{
                display: "inline-block",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            Хочу также
        </span>
    ) : (
        <Text fw={700} ta="center" c="dark.4">
            Менеджер проверит калькуляцию и Вам перезвонит в ближайшее время.
        </Text>
    );
};

export default function ModalComponent({ isOpen, setIsOpen, modalMode, project }: ModalType) {
    console.log(project);

    return modalMode === "telegramBanner" ? (
        <Group className={isOpen ? classes.tel_wrapper_opened : classes.tel_wrapper_closed}>
            <div className={isOpen ? classes.tel_modal_opened : classes.tel_modal_closed}>
                <Banner setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
        </Group>
    ) : (
        <Modal
            centered
            opened={isOpen}
            onClose={() => setIsOpen(false)}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
            title={heading(modalMode)}
            size="xl"
        >
            <CallBackForm modalMode={modalMode} setIsOpen={setIsOpen} project={project} />
        </Modal>
    );
}
