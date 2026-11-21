---
type: Model
title: MiMo-V2-Omni
creator: Xiaomi
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.6, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 38.8, z: 0.16, r: 52.4, estimated: false }  # 추론
  coding: { s: 52.9, z: 0.43, r: 56.5, estimated: false }  # 코딩
  agentic: { s: 72.5, z: 0.95, r: 64.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.9, z: 0.13, r: 51.9, estimated: false }  # 멀티모달
  long_context: { s: 84.6, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 58.2, z: 0.18, r: 52.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# MiMo-V2-Omni

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[gpqa-diamond]] 82.8282828282828%×0.4, [[humanitys-last-exam]] 22.1037998146432%×0.3 |
| 추론 | 52.4 | +0.16 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 82.8282828282828%×1.0, [[humanitys-last-exam]] 22.1037998146432%×1.0 |
| 코딩 | 56.5 | +0.43 | 실측 | [[terminal-bench]] 34.8484848484849%×0.5 |
| 에이전트 | 64.3 | +0.95 | 실측 | [[tau2-bench]] 91.2280701754386%×1.0, [[terminal-bench]] 34.8484848484849%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.9 | +0.13 | 실측 | [[mmmu-pro]] 69.8843930635838%×1.0 |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 52.7 | +0.18 | 실측 | [[ifbench]] 53.53741496598639%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
