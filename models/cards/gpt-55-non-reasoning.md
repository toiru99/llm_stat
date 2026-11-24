---
type: Model
title: GPT-5.5 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 53.4617723058958
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 51.7, z: 0.24, r: 53.6, estimated: false }  # 전문 지식
  reasoning: { s: 32.9, z: -0.11, r: 48.3, estimated: false }  # 추론
  coding: { s: 74.7, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 58.5, z: 0.4, r: 56.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.9, z: 0.23, r: 53.4, estimated: false }  # 멀티모달
  long_context: { s: 72.2, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 47.8, z: -0.11, r: 48.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.5 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 53.4617723058958 t/s · TTFT 1.77348708406005s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.6 | +0.24 | 실측 | [[gpqa-diamond]] 76.7677%×0.4, [[humanitys-last-exam]] 13.7164%×0.3 |
| 추론 | 48.3 | -0.11 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 76.7677%×1.0, [[humanitys-last-exam]] 13.7164%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[terminal-bench]] 49.2424%×0.5 |
| 에이전트 | 56.0 | +0.4 | 실측 | [[gdpval]] 977.12 Elo×1.0, [[tau2-bench]] 69.2982%×1.0, [[tau3-banking]] 14.8454%×1.0, [[terminal-bench]] 49.2424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.4 | +0.23 | 실측 | [[mmmu-pro]] 71.3873%×1.0 |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 64%×1.0 |
| 지시 따르기 | 48.3 | -0.11 | 실측 | [[ifbench]] 46.1224%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
