---
type: Model
title: o3-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.045
output_speed_tps: 220.520147160357
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.21, r: 53.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.3, z: -0.19, r: 47.1, estimated: false }  # 추론
  coding: { s: 42.4, z: 0.05, r: 50.7, estimated: false }  # 코딩
  agentic: { s: 19.7, z: -0.97, r: 35.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.5, z: -0.28, r: 45.7, estimated: false }  # 긴문맥
  instruction: { s: 77.3, z: 1.12, r: 66.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# o3-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $1.045/1M · 220.520147160357 t/s · TTFT 12.4950825252466s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.1 | +0.21 | 실측 | [[gpqa-diamond]] 77.2727%×0.4, [[humanitys-last-exam]] 12.04%×0.3 |
| 추론 | 47.1 | -0.19 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 77.2727%×1.0, [[humanitys-last-exam]] 12.04%×1.0 |
| 코딩 | 50.7 | +0.05 | 실측 | [[scicode]] 42.8241%×1.0, [[terminal-bench]] 6.06061%×0.5 |
| 에이전트 | 35.5 | -0.97 | 실측 | [[gdpval]] 237.21 Elo×1.0, [[tau2-bench]] 31.2865%×1.0, [[tau3-banking]] 5.15464%×1.0, [[terminal-bench]] 6.06061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.7 | -0.28 | 실측 | [[aa-lcr]] 43%×1.0 |
| 지시 따르기 | 66.7 | +1.12 | 실측 | [[ifbench]] 67.1429%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
