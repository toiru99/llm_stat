---
type: Model
title: GPT-5.4 (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: 70.5117295357217
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.5, z: 1.06, r: 65.8, estimated: false }  # 전문 지식
  reasoning: { s: 50.3, z: 0.75, r: 61.3, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 70.4, z: 0.82, r: 62.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.7, z: 0.68, r: 60.2, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 75.5, z: 1.04, r: 65.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.4 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 70.5117295357217 t/s · TTFT 4.80395579310001s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 65.8 | +1.06 | 실측 | [[gpqa-diamond]] 87.0707%×0.4, [[humanitys-last-exam]] 30.8156%×0.3 |
| 추론 | 61.3 | +0.75 | 실측 | [[critpt]] 7.42857%×1.0, [[gpqa-diamond]] 87.0707%×1.0, [[humanitys-last-exam]] 30.8156%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[terminal-bench]] 43.1818%×0.5 |
| 에이전트 | 62.3 | +0.82 | 실측 | [[tau2-bench]] 74.5614%×1.0, [[terminal-bench]] 43.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.2 | +0.68 | 실측 | [[mmmu-pro]] 77.9769%×1.0 |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 76.6667%×1.0 |
| 지시 따르기 | 65.7 | +1.04 | 실측 | [[ifbench]] 65.9184%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
