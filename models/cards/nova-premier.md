---
type: Model
title: Nova Premier
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.9, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 19.6, z: -0.78, r: 38.4, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 24.5, z: -0.8, r: 38.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.7, z: -0.58, r: 41.3, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.69, r: 39.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Premier
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Nova Premier

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[gpqa-diamond]] 56.8687%×0.4, [[humanitys-last-exam]] 4.17053%×0.3 |
| 추론 | 38.4 | -0.78 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 56.8687%×1.0, [[humanitys-last-exam]] 4.17053%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 38.0 | -0.8 | 실측 | [[tau2-bench]] 38.3041%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.3 | -0.58 | 실측 | [[aa-lcr]] 34.3333%×1.0 |
| 지시 따르기 | 39.6 | -0.69 | 실측 | [[ifbench]] 36.1905%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
