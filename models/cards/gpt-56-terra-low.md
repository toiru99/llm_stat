---
type: Model
title: GPT-5.6 Terra (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 88.736457260331
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.7, z: 0.92, r: 63.8, estimated: false }  # 전문 지식
  reasoning: { s: 50.3, z: 0.75, r: 61.3, estimated: false }  # 추론
  coding: { s: 69.3, z: 0.95, r: 64.3, estimated: false }  # 코딩
  agentic: { s: 57.7, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.55, r: 58.3, estimated: false }  # 멀티모달
  long_context: { s: 80.5, z: 0.7, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 66.8, z: 0.68, r: 60.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5.6 Terra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 88.736457260331 t/s · TTFT 2.69847615327227s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.8 | +0.92 | 실측 | [[gpqa-diamond]] 84.3434%×0.4, [[humanitys-last-exam]] 29.1937%×0.3 |
| 추론 | 61.3 | +0.75 | 실측 | [[critpt]] 9.42857%×1.0, [[gpqa-diamond]] 84.3434%×1.0, [[humanitys-last-exam]] 29.1937%×1.0 |
| 코딩 | 64.3 | +0.95 | 실측 | [[scicode]] 49.8843%×1.0, [[terminal-bench]] 43.9394%×0.5 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[gdpval]] 1116.89 Elo×1.0, [[tau2-bench]] 60.5263%×1.0, [[tau3-banking]] 18.7629%×1.0, [[terminal-bench]] 43.9394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.3 | +0.55 | 실측 | [[mmmu-pro]] 76.1272%×1.0 |
| 긴문맥 | 60.4 | +0.7 | 실측 | [[aa-lcr]] 71.3333%×1.0 |
| 지시 따르기 | 60.2 | +0.68 | 실측 | [[ifbench]] 59.6599%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
