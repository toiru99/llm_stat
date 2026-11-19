---
type: Model
title: GLM-4.7-Flash (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.082
output_speed_tps: 55.1560785402547
context_window: 200000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.6, z: -1.05, r: 34.3, estimated: false }  # 전문 지식
  reasoning: { s: 15.4, z: -1.0, r: 35.1, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.16, r: 32.6, estimated: false }  # 코딩
  agentic: { s: 49.2, z: 0.15, r: 52.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.91, r: 36.3, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.25, r: 46.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# GLM-4.7-Flash (non-reasoning)

Z AI · Open · Small · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.082/1M · 55.1560785402547 t/s · TTFT 10.04473572877362s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.3 | -1.05 | 실측 | [[gpqa-diamond]] 45.1515151515151%×0.4, [[humanitys-last-exam]] 4.95829471733086%×0.3 |
| 추론 | 35.1 | -1.0 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.1515151515151%×1.0, [[humanitys-last-exam]] 4.95829471733086%×1.0 |
| 코딩 | 32.6 | -1.16 | 실측 | [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 52.2 | +0.15 | 실측 | [[tau2-bench]] 91.812865497076%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.3 | -0.91 | 실측 | [[aa-lcr]] 20.3333333333333%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 실측 | [[ifbench]] 46.2585034013605%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
