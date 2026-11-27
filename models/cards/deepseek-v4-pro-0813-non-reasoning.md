---
type: Model
title: DeepSeek V4 Pro 0813 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 12.5675939779921
price_blended_usd_1m: 0.6908
output_speed_tps: 78.4660829524618
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: false
radar:
  knowledge: { s: 13.0, z: -1.64, r: 25.4, estimated: false }  # 전문 지식
  reasoning: { s: 6.5, z: -1.42, r: 28.6, estimated: false }  # 추론
  coding: { s: 54.3, z: 0.45, r: 56.7, estimated: false }  # 코딩
  agentic: { s: 64.7, z: 0.62, r: 59.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.1, z: -0.02, r: 49.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# DeepSeek V4 Pro 0813 (non-reasoning)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **12.5675939779921**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 78.4660829524618 t/s · TTFT 2.57722758338998s · 1M ctx` · 가성비 18.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 25.4 | -1.64 | 실측 | [[humanitys-last-exam]] 10.5653%×0.3 |
| 추론 | 28.6 | -1.42 | 실측 | [[critpt]] 0%×1.0, [[humanitys-last-exam]] 10.5653%×1.0 |
| 코딩 | 56.7 | +0.45 | 실측 | [[scicode]] 39.9306%×1.0 |
| 에이전트 | 59.3 | +0.62 | 실측 | [[gdpval]] 1065.02 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.7 | -0.02 | 실측 | [[aa-lcr]] 50.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
