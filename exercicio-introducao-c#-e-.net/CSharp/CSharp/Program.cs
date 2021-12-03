using System;
using Primeiro;
using CSharp;
using Interface;
using Enum;

namespace CSharp
{
    class Program
    {
        public static void Main(string[] args)
        {
            var pessoa1 = (Pessoas)0;
            Pessoas pessoa2 = Pessoas.Paula;
            Pessoas pessoa3 = (Pessoas)4;

            Animal animal = new Animal();

            animal.Nome = "Rex";
            animal.NomeDono = "Pedro";
            animal.Especie = "Cachorro";

            Pessoa person = new Pessoa();

            person.Nome = "Kaio";
            person.Idade = 26;
            person.Estado = "SP";

            var person2 = new Pessoa();

            person2.Nome = "Henrik";
            person2.Idade = 19;
            person2.Estado = "MG";

            var classe = new Primeiro.Classe();
            var classe2 = new Segundo.Classe();

            Console.WriteLine(pessoa3);
        }
    }
}
