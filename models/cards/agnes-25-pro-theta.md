---
type: Model
title: Agnes 2.5 Pro Theta
creator: Sapiens AI
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 0.057
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.3, z: 0.12, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 41.7, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 80.8, z: 1.45, r: 71.7, estimated: false }  # 코딩
  agentic: { s: 80.8, z: 1.56, r: 73.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.1, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.27, r: 69.1, estimated: false }  # 긴문맥
  instruction: { s: 53.9, z: 0.05, r: 50.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Theta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Agnes 2.5 Pro Theta

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.057/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 421.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.12 | 실측 | [[humanitys-last-exam]] 37.2%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[critpt]] 26.0%×1.0, [[humanitys-last-exam]] 37.2%×1.0 |
| 코딩 | 71.7 | +1.45 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 73.4 | +1.56 | 실측 | [[gdpval]] 1507.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 69.1 | +1.27 | 실측 | [[aa-lcr]] 84.7%×1.0 |
| 지시 따르기 | 50.7 | +0.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
