---
type: Model
title: Qwen4 Max
creator: Alibaba
license: Proprietary
intelligence_index: 42.8914543287565
price_blended_usd_1m: 0.8025
output_speed_tps: 54.11598266219594
context_window: 983616
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.9, z: 1.47, r: 72.1, estimated: true }  # 전문 지식
  reasoning: { s: 71.3, z: 1.76, r: 76.4, estimated: true }  # 추론
  coding: { s: 80.0, z: 1.36, r: 70.4, estimated: true }  # 코딩
  agentic: { s: 97.5, z: 1.82, r: 77.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.07, r: 66.1, estimated: true }  # 긴문맥
  instruction: { s: 78.8, z: 1.04, r: 65.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen4 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Qwen4 Max

Alibaba · Proprietary · Unknown · 컨텍스트 983k · 종합지능 **42.8914543287565**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $4.5 · 혼합 $0.8025/1M · 54.11598266219594 t/s · TTFT 6.934747990020225s · 983k ctx` · 가성비 53.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.1 | +1.47 | 추정 | (추정) |
| 추론 | 76.4 | +1.76 | 추정 | (추정) |
| 코딩 | 70.4 | +1.36 | 추정 | (추정) |
| 에이전트 | 77.3 | +1.82 | 실측 | [[gdpval]] 1808.69%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 추정 | (추정) |
| 지시 따르기 | 65.6 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
