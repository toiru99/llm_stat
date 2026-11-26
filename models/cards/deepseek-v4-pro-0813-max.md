---
type: Model
title: DeepSeek V4 Pro 0813 (max)
creator: DeepSeek
license: Open
intelligence_index: 23.0632981493003
price_blended_usd_1m: 0.6908
output_speed_tps: 80.2192224884473
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.53, r: 73.0, estimated: false }  # 전문 지식
  reasoning: { s: 67.0, z: 1.58, r: 73.7, estimated: false }  # 추론
  coding: { s: 72.6, z: 1.06, r: 65.9, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# DeepSeek V4 Pro 0813 (max)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **23.0632981493003**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 80.2192224884473 t/s · TTFT 1.95956652117815s · 1M ctx` · 가성비 33.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.0 | +1.53 | 실측 | [[gpqa-diamond]] 92.8283%×0.4, [[humanitys-last-exam]] 41.0102%×0.3 |
| 추론 | 73.7 | +1.58 | 실측 | [[critpt]] 18%×1.0, [[gpqa-diamond]] 92.8283%×1.0, [[humanitys-last-exam]] 41.0102%×1.0 |
| 코딩 | 65.9 | +1.06 | 실측 | [[scicode]] 51.0417%×1.0 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[gdpval]] 1455.09 Elo×1.0, [[tau3-banking]] 39.5876%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 80.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
