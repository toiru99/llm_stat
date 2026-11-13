---
type: Model
title: MiMo-V2.6-Pro
creator: Xiaomi
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.1765
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.0, z: 0.91, r: 63.6, estimated: false }  # 전문 지식
  reasoning: { s: 55.2, z: 0.58, r: 58.7, estimated: false }  # 추론
  coding: { s: 88.8, z: 1.7, r: 75.6, estimated: false }  # 코딩
  agentic: { s: 90.7, z: 1.88, r: 78.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 97.3, z: 1.32, r: 69.8, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.45, r: 56.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# MiMo-V2.6-Pro

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 170.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.6 | +0.91 | 실측 | [[humanitys-last-exam]] 49.4%×0.3 |
| 추론 | 58.7 | +0.58 | 실측 | [[critpt]] 34.0%×1.0, [[humanitys-last-exam]] 49.4%×1.0 |
| 코딩 | 75.6 | +1.7 | 실측 | [[scicode]] 60.9%×1.0 |
| 에이전트 | 78.2 | +1.88 | 실측 | [[gdpval]] 1692.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.8 | +1.32 | 실측 | [[aa-lcr]] 86.3%×1.0 |
| 지시 따르기 | 56.7 | +0.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
