---
type: Model
title: Nova Pro
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.62
output_speed_tps: 98.3203107422603
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.7, z: -0.93, r: 36.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.4, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.07, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 11.7, z: -1.25, r: 31.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 39.8, z: -1.61, r: 25.8, estimated: false }  # 멀티모달
  long_context: { s: 23.7, z: -1.04, r: 34.3, estimated: false }  # 긴문맥
  instruction: { s: 36.5, z: -0.58, r: 41.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nova Pro

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.8 · 출력 $3.2 · 혼합 $0.62/1M · 98.3203107422603 t/s · TTFT 2.81092949683054s · 300k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 36.1 | -0.93 | 실측 | [[gpqa-diamond]] 49.899%×0.4, [[humanitys-last-exam]] 3.19%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 49.899%×1.0, [[humanitys-last-exam]] 3.19%×1.0 |
| 코딩 | 33.9 | -1.07 | 실측 | [[terminal-bench]] 6.06061%×0.5 |
| 에이전트 | 31.3 | -1.25 | 실측 | [[tau2-bench]] 14.0351%×1.0, [[terminal-bench]] 6.06061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 25.8 | -1.61 | 실측 | [[mmmu-pro]] 44.3353%×1.0 |
| 긴문맥 | 34.3 | -1.04 | 실측 | [[aa-lcr]] 21%×1.0 |
| 지시 따르기 | 41.3 | -0.58 | 실측 | [[ifbench]] 38.0952%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
