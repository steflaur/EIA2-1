declare namespace abschluss {
    class EnemyFishes extends MovingObjects {
        constructor(_src: string, _typ: string, _width: number, _height: number);
        update(): void;
        move(): void;
    }
}
