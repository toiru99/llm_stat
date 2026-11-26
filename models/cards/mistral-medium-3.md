---
type: Model
title: Mistral Medium 3
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.56
output_speed_tps: 38.1755323908927
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.5, z: -0.65, r: 40.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 15.1, z: -1.13, r: 33.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 51.3, z: -1.02, r: 34.6, estimated: false }  # 멀티모달
  long_context: { s: 35.3, z: -0.68, r: 39.7, estimated: false }  # 긴문맥
  instruction: { s: 38.1, z: -0.51, r: 42.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Mistral Medium 3

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.4 · 출력 $2.0 · 혼합 $0.56/1M · 38.1755323908927 t/s · TTFT 5.03053978387328s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.3 | -0.65 | 실측 | [[gpqa-diamond]] 57.7778%×0.4, [[humanitys-last-exam]] 4.05%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 57.7778%×1.0, [[humanitys-last-exam]] 4.05%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 33.1 | -1.13 | 실측 | [[tau2-bench]] 24.269%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.6 | -1.02 | 실측 | [[mmmu-pro]] 53.0058%×1.0 |
| 긴문맥 | 39.7 | -0.68 | 실측 | [[aa-lcr]] 31.3333%×1.0 |
| 지시 따르기 | 42.3 | -0.51 | 실측 | [[ifbench]] 39.2517%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
