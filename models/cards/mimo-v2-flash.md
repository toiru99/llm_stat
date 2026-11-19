---
type: Model
title: MiMo-V2-Flash
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.12
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.2, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 42.8, z: 0.35, r: 55.3, estimated: false }  # 추론
  coding: { s: 42.5, z: 0.09, r: 51.3, estimated: false }  # 코딩
  agentic: { s: 69.2, z: 0.84, r: 62.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.81, r: 62.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# MiMo-V2-Flash

Xiaomi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[gpqa-diamond]] 84.64646464646471%×0.4, [[humanitys-last-exam]] 22.8452270620945%×0.3 |
| 추론 | 55.3 | +0.35 | 실측 | [[critpt]] 4.28571428571429%×1.0, [[gpqa-diamond]] 84.64646464646471%×1.0, [[humanitys-last-exam]] 22.8452270620945%×1.0 |
| 코딩 | 51.3 | +0.09 | 실측 | [[terminal-bench]] 28.030303030303%×0.5 |
| 에이전트 | 62.6 | +0.84 | 실측 | [[tau2-bench]] 95.0292397660819%×1.0, [[terminal-bench]] 28.030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.6666666666667%×1.0 |
| 지시 따르기 | 62.1 | +0.81 | 실측 | [[ifbench]] 64.2176870748299%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
