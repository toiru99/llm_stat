---
type: Model
title: Nova 2.0 Lite (medium)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: 131.100525696048
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.9, z: 0.1, r: 51.5, estimated: false }  # 전문 지식
  reasoning: { s: 29.4, z: -0.28, r: 45.7, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 51.4, z: 0.15, r: 52.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.1, z: -0.37, r: 44.4, estimated: false }  # 멀티모달
  long_context: { s: 67.7, z: 0.3, r: 54.6, estimated: false }  # 긴문맥
  instruction: { s: 79.2, z: 1.19, r: 67.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nova 2.0 Lite (medium)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 131.100525696048 t/s · TTFT 20.2161252443758s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.5 | +0.1 | 실측 | [[gpqa-diamond]] 76.7677%×0.4, [[humanitys-last-exam]] 8.98981%×0.3 |
| 추론 | 45.7 | -0.28 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 76.7677%×1.0, [[humanitys-last-exam]] 8.98981%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 17.4242%×0.5 |
| 에이전트 | 52.3 | +0.15 | 실측 | [[tau2-bench]] 75.731%×1.0, [[terminal-bench]] 17.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.4 | -0.37 | 실측 | [[mmmu-pro]] 62.5434%×1.0 |
| 긴문맥 | 54.6 | +0.3 | 실측 | [[aa-lcr]] 60%×1.0 |
| 지시 따르기 | 67.9 | +1.19 | 실측 | [[ifbench]] 68.5034%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
