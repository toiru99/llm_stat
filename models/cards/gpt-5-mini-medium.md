---
type: Model
title: GPT-5 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 86.33760613036024
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.3, z: 0.4, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.0, r: 49.9, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.13, r: 52.0, estimated: false }  # 코딩
  agentic: { s: 57.7, z: 0.45, r: 56.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.7, z: 0.07, r: 51.1, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 82.9, z: 1.22, r: 68.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 86.33760613036024 t/s · TTFT 11.997850579833326s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.4 | 실측 | [[gpqa-diamond]] 80.3030303030303%×0.4, [[humanitys-last-exam]] 15.940685820203901%×0.3 |
| 추론 | 49.9 | +-0.0 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 80.3030303030303%×1.0, [[humanitys-last-exam]] 15.940685820203901%×1.0 |
| 코딩 | 52.0 | +0.13 | 실측 | [[terminal-bench]] 28.7878787878788%×0.5 |
| 에이전트 | 56.8 | +0.45 | 실측 | [[tau2-bench]] 71.0526315789474%×1.0, [[terminal-bench]] 28.7878787878788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.1 | +0.07 | 실측 | [[mmmu-pro]] 68.8439306358381%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 72.3333333333333%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 실측 | [[ifbench]] 71.15646258503399%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
