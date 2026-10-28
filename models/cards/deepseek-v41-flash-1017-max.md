---
type: Model
title: DeepSeek V4.1 Flash 1017 (max)
creator: DeepSeek
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.1842
output_speed_tps: 173.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 0.91, r: 63.6, estimated: false }  # 전문 지식
  reasoning: { s: 51.7, z: 0.27, r: 54.0, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 93.6, z: 2.04, r: 80.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.91, r: 63.7, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 60.2, z: 0.31, r: 54.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · 173.0 t/s · TTFT 1.13s · 1M ctx` · 가성비 173.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.6 | +0.91 | 실측 | [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 54.0 | +0.27 | 실측 | [[critpt]] 24.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 80.7 | +2.04 | 실측 | [[gdpval]] 1746.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.7 | +0.91 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 54.7 | +0.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
