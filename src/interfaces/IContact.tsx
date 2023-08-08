import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IContact{
    id: number,
    icon: IconDefinition,
    title: string,
    info ?: string
}