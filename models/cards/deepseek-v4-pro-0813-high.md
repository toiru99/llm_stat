---
type: Model
title: DeepSeek V4 Pro 0813 (high)
creator: DeepSeek
license: Open
intelligence_index: 20.799409628237
price_blended_usd_1m: 0.6908
output_speed_tps: 81.0869631880741
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 55.2, z: 0.41, r: 56.1, estimated: false }  # 전문 지식
  reasoning: { s: 53.6, z: 0.92, r: 63.7, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 76.6, z: 1.04, r: 65.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# DeepSeek V4 Pro 0813 (high)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **20.799409628237**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 81.0869631880741 t/s · TTFT 2.41509796779254s · 1M ctx` · 가성비 30.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 56.1 | +0.41 | 실측 | [[humanitys-last-exam]] 41.4736%×0.3 |
| 추론 | 63.7 | +0.92 | 실측 | [[critpt]] 18.5714%×1.0, [[humanitys-last-exam]] 41.4736%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 51.7361%×1.0 |
| 에이전트 | 65.6 | +1.04 | 실측 | [[gdpval]] 1334.48 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 79.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
