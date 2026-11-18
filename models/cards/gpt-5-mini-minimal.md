---
type: Model
title: GPT-5 mini (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 75.75447515791573
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.3, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 21.8, z: -0.62, r: 40.7, estimated: false }  # 코딩
  agentic: { s: 27.0, z: -0.62, r: 40.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.5, z: -0.66, r: 40.1, estimated: false }  # 멀티모달
  long_context: { s: 44.4, z: -0.27, r: 45.9, estimated: false }  # 긴문맥
  instruction: { s: 47.0, z: -0.29, r: 45.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-5 mini (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 75.75447515791573 t/s · TTFT 1.9843085430555887s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[gpqa-diamond]] 68.68686868686869%×0.4, [[humanitys-last-exam]] 5.050973123262279%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.68686868686869%×1.0, [[humanitys-last-exam]] 5.050973123262279%×1.0 |
| 코딩 | 40.7 | -0.62 | 실측 | [[terminal-bench]] 14.3939393939394%×0.5 |
| 에이전트 | 40.7 | -0.62 | 실측 | [[tau2-bench]] 31.8713450292398%×1.0, [[terminal-bench]] 14.3939393939394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.1 | -0.66 | 실측 | [[mmmu-pro]] 58.3815028901734%×1.0 |
| 긴문맥 | 45.9 | -0.27 | 실측 | [[aa-lcr]] 39.3333333333333%×1.0 |
| 지시 따르기 | 45.7 | -0.29 | 실측 | [[ifbench]] 45.578231292517%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
