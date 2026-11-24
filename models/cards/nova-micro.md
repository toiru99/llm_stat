---
type: Model
title: Nova Micro
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0271
output_speed_tps: 223.949615213179
context_window: 130000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.2, z: -1.34, r: 29.9, estimated: false }  # 전문 지식
  reasoning: { s: 11.6, z: -1.17, r: 32.5, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 8.2, z: -1.37, r: 29.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.7, z: -1.32, r: 30.2, estimated: false }  # 긴문맥
  instruction: { s: 24.3, z: -1.09, r: 33.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Micro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nova Micro

Amazon · Proprietary · Unknown · 컨텍스트 130k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.035 · 출력 $0.14 · 혼합 $0.0271/1M · 223.949615213179 t/s · TTFT 1.27927077103288s · 130k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 29.9 | -1.34 | 실측 | [[gpqa-diamond]] 35.7576%×0.4, [[humanitys-last-exam]] 4.63392%×0.3 |
| 추론 | 32.5 | -1.17 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 35.7576%×1.0, [[humanitys-last-exam]] 4.63392%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 29.4 | -1.37 | 실측 | [[tau2-bench]] 14.0351%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.2 | -1.32 | 실측 | [[aa-lcr]] 13%×1.0 |
| 지시 따르기 | 33.7 | -1.09 | 실측 | [[ifbench]] 29.3878%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
