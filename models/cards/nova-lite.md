---
type: Model
title: Nova Lite
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0465
output_speed_tps: 136.7700723360136
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.1, z: -1.12, r: 33.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.4, z: -1.04, r: 34.3, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.32, r: 30.2, estimated: false }  # 코딩
  agentic: { s: 9.4, z: -1.23, r: 31.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 31.1, z: -2.06, r: 19.1, estimated: false }  # 멀티모달
  long_context: { s: 21.4, z: -0.96, r: 35.7, estimated: false }  # 긴문맥
  instruction: { s: 30.9, z: -0.96, r: 35.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Nova Lite

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.06 · 출력 $0.24 · 혼합 $0.0465/1M · 136.7700723360136 t/s · TTFT 1.611557184747219s · 300k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.2 | -1.12 | 실측 | [[gpqa-diamond]] 43.3333333333333%×0.4, [[humanitys-last-exam]] 4.29%×0.3 |
| 추론 | 34.3 | -1.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.3333333333333%×1.0, [[humanitys-last-exam]] 4.29%×1.0 |
| 코딩 | 30.2 | -1.32 | 실측 | [[terminal-bench]] 0.757575757575758%×0.5 |
| 에이전트 | 31.6 | -1.23 | 실측 | [[tau2-bench]] 17.5438596491228%×1.0, [[terminal-bench]] 0.757575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 19.1 | -2.06 | 실측 | [[mmmu-pro]] 37.8034682080925%×1.0 |
| 긴문맥 | 35.7 | -0.96 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 35.6 | -0.96 | 실측 | [[ifbench]] 34.149659863945594%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
