import { DataArray, Optgroup, Option } from './store';
export default class Select {
    select: HTMLSelectElement;
    listen: boolean;
    onSelectChange?: (data: DataArray) => void;
    onValueChange?: (value: string[]) => void;
    private observer;
    constructor(select: HTMLSelectElement);
    enable(): void;
    disable(): void;
    hideUI(): void;
    showUI(): void;
    changeListen(on: boolean): void;
    addSelectChangeListener(func: (data: DataArray) => void): void;
    removeSelectChangeListener(): void;
    addValueChangeListener(func: (value: string[]) => void): void;
    removeValueChangeListener(): void;
    valueChange(ev: Event): any;
    private observeWrapper;
    private addObserver;
    private connectObserver;
    private disconnectObserver;
    getData(): DataArray;
    getDataFromOptgroup(optgroup: HTMLOptGroupElement): Optgroup;
    getSelectedValues(): string[];
    getDataFromOption(option: HTMLOptionElement): Option;
    setSelected(value: string[]): void;
    updateSelect(id?: string, style?: string, classes?: string[]): void;
    updateOptions(data: DataArray): void;
    createOptgroup(optgroup: Optgroup): HTMLOptGroupElement;
    createOption(info: Option): HTMLOptionElement;
    destroy(): void;
}
