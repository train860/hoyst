type Props = {
    width: number;
    height: number;
    theme: 'light' | 'dark';
}
export default function Logo({ width, height, theme }: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 208C0 109.948 0 60.9218 30.4609 30.4609C60.9218 0 109.948 0 208 0H392C490.052 0 539.078 0 569.539 30.4609C600 60.9218 600 109.948 600 208V392C600 490.052 600 539.078 569.539 569.539C539.078 600 490.052 600 392 600H208C109.948 600 60.9218 600 30.4609 569.539C0 539.078 0 490.052 0 392V208Z"
                fill={theme === 'light' ? '#333333' : '#f0f0f0'} />
            <g transform="translate(300, 300)">
                <g transform="scale(6)">
                    <g transform="translate(-35, -32.5)">
                        <path d="M35 0L0 20L35 35V0Z" fill={theme === 'light' ? '#e5e5e5' : '#666666'} />
                        <path d="M37 0L70 0L37 65Z" fill={theme === 'light' ? '#ffffff' : '#333333'} />
                    </g>
                </g>
            </g>
        </svg>
    );
}