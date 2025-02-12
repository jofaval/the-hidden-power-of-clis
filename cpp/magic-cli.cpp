#include <iostream>
#include <cstdlib>

using namespace std;

bool isHelp(char **argv[])
{
    return argv[0] == "help";
}

void fallbackHelp()
{
    std::cout << "Los comandos disponibles son: ver y crear\n";

    helpVer();
    helpCrear();
}

bool isHelpCrear(char **argv[])
{
    return argv[1] == "crear";
}

void helpCrear()
{
    std::cout << "Te permite crear un fichero: magic-cli crear nombre-fichero.ext\n";
}

bool isHelpVer(char **argv[])
{
    return argv[1] == "ver";
}

void helpVer()
{
    std::cout << "Te permite ver un fichero: magic-cli crear nombre-fichero.ext\n";
}

void help(char **argv[])
{
    if (isHelpCrear(argv))
    {
        helpCrear();
    }
    else if (isHelpVer(argv))
    {
        helpVer();
    }
    else
    {
        fallbackHelp();
    }
}

bool isVer(char **argv[])
{
    return argv[0] == "ver";
}

string getFilenameFromArgs(char **argv[])
{
    return argv[1];
}

void ver(char **argv[])
{
    if (sizeof(argv) != 2)
    {
        std::cout << "Tiene que seguir el siguiente formato: ver fichero\n";
        return;
    }

    system("cat " + getFilenameFromArgs(argv));
}

bool isCrear(char **argv[])
{
    return argv[0] == "crear";
}

void crear(char **argv[])
{
    if (sizeof(argv) != 2)
    {
        std::cout << "Tiene que seguir el siguiente formato: ver fichero\n";
        return;
    }

    system("touch " + getFilenameFromArgs(argv))
}

int main(int argc, char **argv[])
{
    if (isHelp(argv))
    {
        help(argv);
    }
    else if (isVer(argv))
    {
        ver(argv);
    }
    else if (isCrear(argv))
    {
        crear(argv);
    }
    else
    {
        fallbackHelp();
    }
}