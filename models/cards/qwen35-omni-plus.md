---
type: Model
title: Qwen3.5 Omni Plus
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.84
output_speed_tps: 79.54684048688235
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.2, z: 0.44, r: 56.6, estimated: false }  # 전문 지식
  reasoning: { s: 34.9, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.26, r: 46.2, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.56, r: 58.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.9, z: 0.19, r: 52.8, estimated: false }  # 멀티모달
  long_context: { s: 71.8, z: 0.55, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 54.8, z: 0.05, r: 50.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.5 Omni Plus

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.4 · 출력 $4.8 · 혼합 $0.84/1M · 79.54684048688235 t/s · TTFT 2.6900550550694557s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.6 | +0.44 | 실측 | [[gpqa-diamond]] 82.6262626262626%×0.4, [[humanitys-last-exam]] 14.874884151992601%×0.3 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 0.5632653061224491%×1.0, [[gpqa-diamond]] 82.6262626262626%×1.0, [[humanitys-last-exam]] 14.874884151992601%×1.0 |
| 코딩 | 46.2 | -0.26 | 실측 | [[terminal-bench]] 21.2121212121212%×0.5 |
| 에이전트 | 58.3 | +0.56 | 실측 | [[tau2-bench]] 88.3040935672515%×1.0, [[terminal-bench]] 21.2121212121212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.8 | +0.19 | 실측 | [[mmmu-pro]] 70.52023121387279%×1.0 |
| 긴문맥 | 58.2 | +0.55 | 실측 | [[aa-lcr]] 63.66666666666671%×1.0 |
| 지시 따르기 | 50.7 | +0.05 | 실측 | [[ifbench]] 51.156462585034%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
