---
okf_version: "0.1"
---

# LLM Wiki — 벤치마크 지식베이스

한국인이 "어떤 LLM이 어떤 영역을 잘하는가"를 쉽게 보도록 만드는 stat의 원천 지식베이스. [Artificial Analysis](https://artificialanalysis.ai) 리더보드에 쓰이는 벤치마크들을, 각 벤치마크가 **실제로 무엇을 측정하는지**(원본 논문 기준)와 함께 정리한다. [OKF(Open Knowledge Format)](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) 규약을 따른다.

# 디렉터리

* [config.toml](config.toml) - **튜닝값**(제작사 화이트리스트·갱신주기·추정 방식 등). 자주 바뀌는 설정은 여기서 관리
* [benchmarks/](benchmarks/) - 벤치마크별 개념 문서 (column·axes·attributes SSOT). [sources/](benchmarks/sources/)에 원본 논문 PDF
* [domains/](domains/) - 능력 영역 ↔ 벤치마크 매핑
* [models/](models/) - 모델 영역. [radar-spec.md](models/radar-spec.md)(축·방법론 SSOT), [cards/](models/cards/)(자동생성 카드), [data/](models/data/)(스냅샷)
* [scripts/](scripts/) - 파이프라인 (`scrape_aa.mjs`: 리더보드 스크래핑, `build_cards.py`: 스냅샷→카드). 주 1회 갱신
* [log.md](log.md) - 변경 이력

# 빠른 시작

* 영역별로 보려면 → [domains/index.md](domains/index.md)
* 벤치마크 목록 → [benchmarks/index.md](benchmarks/index.md)
* 리더보드 종합점수의 구성 → [Intelligence Index](benchmarks/aa-intelligence-index.md)

# 현재 범위

벤치마크 개념 문서 15개 + 원본 논문 PDF 15편 + AA 자체 지표 방법론 4건. 모델별 실제 점수 데이터는 아직 미수록(다음 단계).
