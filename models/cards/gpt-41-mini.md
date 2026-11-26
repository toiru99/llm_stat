---
type: Model
title: GPT-4.1 mini
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.31
output_speed_tps: 77.9927389396123
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.7, z: -0.34, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.6, z: -0.57, r: 41.4, estimated: false }  # 추론
  coding: { s: 11.5, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 26.2, z: -0.74, r: 39.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 59.0, z: -0.63, r: 40.5, estimated: false }  # 멀티모달
  long_context: { s: 49.6, z: -0.25, r: 46.3, estimated: false }  # 긴문맥
  instruction: { s: 36.8, z: -0.57, r: 41.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-4.1 mini

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.31/1M · 77.9927389396123 t/s · TTFT 1.64345576812511s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.34 | 실측 | [[gpqa-diamond]] 66.3636%×0.4, [[humanitys-last-exam]] 5.02%×0.3 |
| 추론 | 41.4 | -0.57 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 66.3636%×1.0, [[humanitys-last-exam]] 5.02%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[terminal-bench]] 7.57576%×0.5 |
| 에이전트 | 39.0 | -0.74 | 실측 | [[gdpval]] 277.18 Elo×1.0, [[tau2-bench]] 52.924%×1.0, [[tau3-banking]] 5.36082%×1.0, [[terminal-bench]] 7.57576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.5 | -0.63 | 실측 | [[mmmu-pro]] 58.7283%×1.0 |
| 긴문맥 | 46.3 | -0.25 | 실측 | [[aa-lcr]] 44%×1.0 |
| 지시 따르기 | 41.5 | -0.57 | 실측 | [[ifbench]] 38.2993%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
