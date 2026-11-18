---
type: Model
title: DeepSeek V4 Pro 0813 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 12.5675939779921
price_blended_usd_1m: 0.6908
output_speed_tps: 83.41408024912039
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.0, z: -1.66, r: 25.1, estimated: false }  # 전문 지식
  reasoning: { s: 6.5, z: -1.43, r: 28.5, estimated: false }  # 추론
  coding: { s: 54.3, z: 0.48, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 64.7, z: 0.69, r: 60.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.1, z: 0.1, r: 51.6, estimated: false }  # 긴문맥
  instruction: { s: 50.2, z: -0.15, r: 47.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# DeepSeek V4 Pro 0813 (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **12.5675939779921**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 83.41408024912039 t/s · TTFT 2.7045130203199523s · 1M ctx` · 가성비 18.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 25.1 | -1.66 | 실측 | [[humanitys-last-exam]] 10.5653382761817%×0.3 |
| 추론 | 28.5 | -1.43 | 실측 | [[critpt]] 0.0%×1.0, [[humanitys-last-exam]] 10.5653382761817%×1.0 |
| 코딩 | 57.3 | +0.48 | 실측 | [[scicode]] 39.9305555555556%×1.0 |
| 에이전트 | 60.3 | +0.69 | 실측 | [[gdpval]] 1065.08%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.6 | +0.1 | 실측 | [[aa-lcr]] 50.66666666666671%×1.0 |
| 지시 따르기 | 47.7 | -0.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
