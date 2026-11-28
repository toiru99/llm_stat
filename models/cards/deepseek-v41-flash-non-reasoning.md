---
type: Model
title: DeepSeek V4.1 Flash (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1845
output_speed_tps: 246.343263414874
context_window: 1000000
status: past
size_class: Large
params_b: 552
is_reasoning: false
radar:
  knowledge: { s: 13.3, z: -1.63, r: 25.6, estimated: false }  # 전문 지식
  reasoning: { s: 7.0, z: -1.4, r: 29.0, estimated: false }  # 추론
  coding: { s: 47.0, z: 0.2, r: 53.0, estimated: false }  # 코딩
  agentic: { s: 77.1, z: 1.05, r: 65.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.2, z: -0.17, r: 47.5, estimated: false }  # 멀티모달
  long_context: { s: 62.4, z: 0.14, r: 52.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# DeepSeek V4.1 Flash (non-reasoning)

DeepSeek · Open · Large(552B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1845/1M · 246.343263414874 t/s · TTFT 0.9175621399166395s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 25.6 | -1.63 | 실측 | [[humanitys-last-exam]] 10.797%×0.3 |
| 추론 | 29.0 | -1.4 | 실측 | [[critpt]] 0.285714%×1.0, [[humanitys-last-exam]] 10.797%×1.0 |
| 코딩 | 53.0 | +0.2 | 실측 | [[scicode]] 35.5324%×1.0 |
| 에이전트 | 65.8 | +1.05 | 실측 | [[gdpval]] 1347.01 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.5 | -0.17 | 실측 | [[mmmu-pro]] 65.6069%×1.0 |
| 긴문맥 | 52.2 | +0.14 | 실측 | [[aa-lcr]] 55.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
