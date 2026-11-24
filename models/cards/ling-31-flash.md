---
type: Model
title: Ling 3.1 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.192
output_speed_tps: 69.1950286459831
context_window: 1000000
status: past
size_class: Large
params_b: 560
is_reasoning: true
radar:
  knowledge: { s: 52.4, z: 0.27, r: 54.1, estimated: false }  # 전문 지식
  reasoning: { s: 51.4, z: 0.81, r: 62.1, estimated: false }  # 추론
  coding: { s: 77.5, z: 1.23, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 89.4, z: 1.49, r: 72.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Ling 3.1 Flash

InclusionAI · Open · Large(560B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · 69.1950286459831 t/s · TTFT 4.38914305336667s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.1 | +0.27 | 실측 | [[humanitys-last-exam]] 39.4347%×0.3 |
| 추론 | 62.1 | +0.81 | 실측 | [[critpt]] 18%×1.0, [[humanitys-last-exam]] 39.4347%×1.0 |
| 코딩 | 68.4 | +1.23 | 실측 | [[scicode]] 54.0509%×1.0 |
| 에이전트 | 72.4 | +1.49 | 실측 | [[gdpval]] 1625.44 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
