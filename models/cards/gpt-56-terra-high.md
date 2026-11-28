---
type: Model
title: GPT-5.6 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 89.3824928423169
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.7, z: 1.36, r: 70.3, estimated: false }  # 전문 지식
  reasoning: { s: 69.1, z: 1.69, r: 75.3, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.28, r: 69.2, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 0.99, r: 64.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.1, z: 0.75, r: 61.3, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 0.92, r: 63.7, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.96, r: 64.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5.6 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 89.3824928423169 t/s · TTFT 6.42232058288612s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.3 | +1.36 | 실측 | [[gpqa-diamond]] 89.596%×0.4, [[humanitys-last-exam]] 38.5079%×0.3 |
| 추론 | 75.3 | +1.69 | 실측 | [[critpt]] 22.8571%×1.0, [[gpqa-diamond]] 89.596%×1.0, [[humanitys-last-exam]] 38.5079%×1.0 |
| 코딩 | 69.2 | +1.28 | 실측 | [[scicode]] 52.4306%×1.0, [[terminal-bench]] 57.5758%×0.5 |
| 에이전트 | 64.8 | +0.99 | 실측 | [[gdpval]] 1388.23 Elo×1.0, [[tau2-bench]] 78.3626%×1.0, [[tau3-banking]] 28.6598%×1.0, [[terminal-bench]] 57.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.3 | +0.75 | 실측 | [[mmmu-pro]] 79.0751%×1.0 |
| 긴문맥 | 63.7 | +0.92 | 실측 | [[aa-lcr]] 77.6667%×1.0 |
| 지시 따르기 | 64.3 | +0.96 | 실측 | [[ifbench]] 64.4218%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
