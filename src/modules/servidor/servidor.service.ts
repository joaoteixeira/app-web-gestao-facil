import { Injectable } from '@nestjs/common';

@Injectable()
export class ServidorService {
    getAll() {
        return [
            {
                id: 1,
                nome: 'João Teixeira',
                siape: 534534,
                campus: {
                    nome: 'IFRO - Campus Ji-Paraná'
                }
            },
            {
                id: 2,
                nome: 'Reinaldo Pereira',
                siape: 534538,
                campus: {
                    nome: 'IFRO - Campus Ji-Paraná'
                }
            },
            {
                id: 3,
                nome: 'Jefferson Antonio',
                siape: 123215,
                campus: {
                    nome: 'IFRO - Campus Cacoal'
                }
            },
            {
                id: 4,
                nome: 'Elias Abreu',
                siape: 123216,
                campus: {
                    nome: 'IFRO - Campus Vilhena'
                }
            },
        ]
    }
}
