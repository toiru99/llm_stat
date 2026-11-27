---
type: Model
title: Nova Lite
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0465
output_speed_tps: 131.123084423544
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.1, z: -1.1, r: 33.4, estimated: false }  # 전문 지식
  reasoning: { s: 14.4, z: -1.03, r: 34.5, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 9.4, z: -1.33, r: 30.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 31.1, z: -2.06, r: 19.1, estimated: false }  # 멀티모달
  long_context: { s: 21.4, z: -1.11, r: 33.3, estimated: false }  # 긴문맥
  instruction: { s: 30.9, z: -0.81, r: 37.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Nova Lite

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.06 · 출력 $0.24 · 혼합 $0.0465/1M · 131.123084423544 t/s · TTFT 1.63978195964454s · 300k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.4 | -1.1 | 실측 | [[gpqa-diamond]] 43.3333%×0.4, [[humanitys-last-exam]] 4.29%×0.3 |
| 추론 | 34.5 | -1.03 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 43.3333%×1.0, [[humanitys-last-exam]] 4.29%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 30.1 | -1.33 | 실측 | [[tau2-bench]] 17.5439%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 19.1 | -2.06 | 실측 | [[mmmu-pro]] 37.8035%×1.0 |
| 긴문맥 | 33.3 | -1.11 | 실측 | [[aa-lcr]] 19%×1.0 |
| 지시 따르기 | 37.8 | -0.81 | 실측 | [[ifbench]] 34.1497%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
