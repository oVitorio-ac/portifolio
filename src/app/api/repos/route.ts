import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const API_URL = 'https://api.github.com/user/repos';

export async function GET() {
  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: 'Token do GitHub não configurado' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `${API_URL}?visibility=public&per_page=100&sort=updated`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json(
        { error: error.message || 'Erro na API do GitHub' },
        { status: res.status }
      );
    }

    const data = await res.json();

    const repos = data.map((repo: any) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description || 'N/A',
      language: repo.language || 'N/A',
    }));

    return NextResponse.json(repos);
  } catch (err) {
    return NextResponse.json(
      { error: 'Falha ao conectar com GitHub' },
      { status: 500 }
    );
  }
}