---
type: Model
title: GPT-4.1 nano
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0775
output_speed_tps: 190.28380322230052
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.9, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.9, r: 36.5, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.16, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 9.6, z: -1.21, r: 31.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 34.3, z: -1.89, r: 21.6, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.9, r: 36.5, estimated: false }  # 긴문맥
  instruction: { s: 28.0, z: -1.07, r: 33.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-4.1 nano

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.0775/1M · 190.28380322230052 t/s · TTFT 0.9120239824833106s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 51.2121212121212%×0.4, [[humanitys-last-exam]] 3.75347544022243%×0.3 |
| 추론 | 36.5 | -0.9 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.2121212121212%×1.0, [[humanitys-last-exam]] 3.75347544022243%×1.0 |
| 코딩 | 32.7 | -1.16 | 실측 | [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 31.8 | -1.21 | 실측 | [[gdpval]] -205.96%×1.0, [[tau2-bench]] 17.2514619883041%×1.0, [[tau3-banking]] 3.50515463917526%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 21.6 | -1.89 | 실측 | [[mmmu-pro]] 40.1156069364162%×1.0 |
| 긴문맥 | 36.5 | -0.9 | 실측 | [[aa-lcr]] 20.3333333333333%×1.0 |
| 지시 따르기 | 33.9 | -1.07 | 실측 | [[ifbench]] 32.0408163265306%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
