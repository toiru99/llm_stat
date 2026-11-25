---
type: Model
title: Nova 2.0 Lite (high)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: 145.778260089153
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.3, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 32.6, z: -0.13, r: 48.1, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 44.3, z: -0.1, r: 48.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.7, z: -0.29, r: 45.6, estimated: false }  # 멀티모달
  long_context: { s: 68.0, z: 0.32, r: 54.8, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.33, r: 69.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Nova 2.0 Lite (high)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 145.778260089153 t/s · TTFT 17.6179417731954s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[gpqa-diamond]] 81.1111%×0.4, [[humanitys-last-exam]] 11.6311%×0.3 |
| 추론 | 48.1 | -0.13 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 81.1111%×1.0, [[humanitys-last-exam]] 11.6311%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 16.6667%×0.5 |
| 에이전트 | 48.5 | -0.1 | 실측 | [[gdpval]] 373.26 Elo×1.0, [[tau2-bench]] 72.807%×1.0, [[terminal-bench]] 16.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.6 | -0.29 | 실측 | [[mmmu-pro]] 63.7572%×1.0 |
| 긴문맥 | 54.8 | +0.32 | 실측 | [[aa-lcr]] 60.3333%×1.0 |
| 지시 따르기 | 69.9 | +1.33 | 실측 | [[ifbench]] 70.7483%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
