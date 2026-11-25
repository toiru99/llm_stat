---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0475
output_speed_tps: 166.652670444984
context_window: 262144
status: past
size_class: Medium
params_b: 124
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.8, r: 62.0, estimated: false }  # 전문 지식
  reasoning: { s: 41.1, z: 0.29, r: 54.4, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.56, r: 58.4, estimated: false }  # 코딩
  agentic: { s: 56.3, z: 0.33, r: 54.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium(124B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.075 · 출력 $0.22 · 혼합 $0.0475/1M · 166.652670444984 t/s · TTFT 1.89500352536296s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.0 | +0.8 | 실측 | [[gpqa-diamond]] 85.4545%×0.4, [[humanitys-last-exam]] 23.6793%×0.3 |
| 추론 | 54.4 | +0.29 | 실측 | [[critpt]] 1.71429%×1.0, [[gpqa-diamond]] 85.4545%×1.0, [[humanitys-last-exam]] 23.6793%×1.0 |
| 코딩 | 58.4 | +0.56 | 실측 | [[scicode]] 42.0139%×1.0 |
| 에이전트 | 54.9 | +0.33 | 실측 | [[gdpval]] 955.96 Elo×1.0, [[tau3-banking]] 27.2165%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 73%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
