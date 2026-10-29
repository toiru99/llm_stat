---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.208
output_speed_tps: 114.0
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.2, z: 0.65, r: 59.7, estimated: false }  # 전문 지식
  reasoning: { s: 43.6, z: -0.1, r: 48.5, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.88, r: 63.1, estimated: false }  # 코딩
  agentic: { s: 44.8, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.43, r: 56.5, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 80.6, z: 1.17, r: 67.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small · 컨텍스트 131k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.208/1M · 114.0 t/s · TTFT 1.25s · 131k ctx` · 가성비 28.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.7 | +0.65 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 48.5 | -0.1 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 63.1 | +0.88 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[gdpval]] 793.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.5 | +0.43 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 67.5 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
