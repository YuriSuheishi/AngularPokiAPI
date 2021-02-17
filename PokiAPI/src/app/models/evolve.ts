export interface Evolve{
    baby_trigger_item: string;
    chain: {
        evolves_to: [{
            evolves_to: [{ 
                species: {
                name: string;
                }}
            ];
            species: {
                name: string;
            };
        }];
        species:{
            name: string;
        };
    };
    id: number;
}