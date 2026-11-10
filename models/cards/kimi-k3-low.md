---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.1, z: 0.78, r: 61.7, estimated: false }  # 전문 지식
  reasoning: { s: 42.0, z: -0.06, r: 49.1, estimated: false }  # 추론
  coding: { s: 75.3, z: 1.26, r: 68.9, estimated: false }  # 코딩
  agentic: { s: 70.9, z: 1.22, r: 68.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.1, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 89.4, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 54.6, z: 0.08, r: 51.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 7.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.7 | +0.78 | 실측 | [[gpqa-diamond]] 84.2%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 49.1 | -0.06 | 실측 | [[critpt]] 5.5%×1.0, [[gpqa-diamond]] 84.2%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 68.9 | +1.26 | 실측 | [[scicode]] 52.7%×1.0 |
| 에이전트 | 68.4 | +1.22 | 실측 | [[gdpval]] 1136.0%×1.0, [[tau3-banking]] 41.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 79.3%×1.0 |
| 지시 따르기 | 51.2 | +0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
