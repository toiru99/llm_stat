---
type: Model
title: Nova 2.0 Lite (low)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: 137.536226731945
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.4, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 39.2, z: -0.28, r: 45.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.0, z: -0.69, r: 39.7, estimated: false }  # 멀티모달
  long_context: { s: 61.3, z: 0.11, r: 51.6, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.77, r: 61.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Nova 2.0 Lite (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 137.536226731945 t/s · TTFT 14.6899894343527s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[gpqa-diamond]] 69.798%×0.4, [[humanitys-last-exam]] 4.03151%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 69.798%×1.0, [[humanitys-last-exam]] 4.03151%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 45.8 | -0.28 | 실측 | [[tau2-bench]] 71.9298%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 39.7 | -0.69 | 실측 | [[mmmu-pro]] 57.9769%×1.0 |
| 긴문맥 | 51.6 | +0.11 | 실측 | [[aa-lcr]] 54.3333%×1.0 |
| 지시 따르기 | 61.5 | +0.77 | 실측 | [[ifbench]] 61.2245%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
