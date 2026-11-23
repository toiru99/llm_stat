---
type: Model
title: Mistral Medium 3
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.56
output_speed_tps: 34.9793815575196
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.5, z: -0.67, r: 40.0, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.78, r: 38.4, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.16, r: 32.5, estimated: false }  # 코딩
  agentic: { s: 15.1, z: -1.03, r: 34.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 51.3, z: -1.02, r: 34.6, estimated: false }  # 멀티모달
  long_context: { s: 35.3, z: -0.54, r: 41.8, estimated: false }  # 긴문맥
  instruction: { s: 38.1, z: -0.66, r: 40.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Mistral Medium 3

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.4 · 출력 $2.0 · 혼합 $0.56/1M · 34.9793815575196 t/s · TTFT 29.0556279879104s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.0 | -0.67 | 실측 | [[gpqa-diamond]] 57.77777777777779%×0.4, [[humanitys-last-exam]] 4.05%×0.3 |
| 추론 | 38.4 | -0.78 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.77777777777779%×1.0, [[humanitys-last-exam]] 4.05%×1.0 |
| 코딩 | 32.5 | -1.16 | 실측 | [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 34.5 | -1.03 | 실측 | [[tau2-bench]] 24.269005847953203%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.6 | -1.02 | 실측 | [[mmmu-pro]] 53.0057803468208%×1.0 |
| 긴문맥 | 41.8 | -0.54 | 실측 | [[aa-lcr]] 31.3333333333333%×1.0 |
| 지시 따르기 | 40.1 | -0.66 | 실측 | [[ifbench]] 39.2517006802721%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
