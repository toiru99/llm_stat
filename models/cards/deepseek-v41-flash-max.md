---
type: Model
title: DeepSeek V4.1 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1842
output_speed_tps: 223.972771101265
context_window: 1000000
status: past
size_class: Large
params_b: 552
is_reasoning: true
radar:
  knowledge: { s: 52.2, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 46.1, z: 0.54, r: 58.1, estimated: false }  # 추론
  coding: { s: 73.9, z: 1.11, r: 66.6, estimated: false }  # 코딩
  agentic: { s: 88.3, z: 1.45, r: 71.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.3, z: 0.61, r: 59.1, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V4.1 Flash (max)

DeepSeek · Open · Large(552B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · 223.972771101265 t/s · TTFT 0.907480868833265s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[humanitys-last-exam]] 39.2493%×0.3 |
| 추론 | 58.1 | +0.54 | 실측 | [[critpt]] 14.2857%×1.0, [[humanitys-last-exam]] 39.2493%×1.0 |
| 코딩 | 66.6 | +1.11 | 실측 | [[scicode]] 51.8519%×1.0 |
| 에이전트 | 71.8 | +1.45 | 실측 | [[gdpval]] 1600 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.1 | +0.61 | 실측 | [[mmmu-pro]] 76.9942%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 84%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
